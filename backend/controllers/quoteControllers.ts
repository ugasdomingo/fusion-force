//Import tools
import Quote from '../models/Quote';
import { uploadInvoiceImage, deleteImage } from '../utils/cloudinary';
import fs from 'fs-extra';

// getAllQuotes --> Line 10
// createQuote --> Line 20
// getQuote --> Line 34
// deleteQuote --> Line 47
// updateQuote --> Line 60

// getAllQuotes Controller
export const getAllQuote = async (req: any, res: any) => {
    try {
        const quotes = await Quote.find();
        res.status(200).json({ quotes });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// createQuote Controller
export const createQuote = async (req: any, res: any) => {
    try {
        const {
            quotesName,
            quotesEmail,
            quotesPhone,
            quotesZipcode,
            quotesDirection,
            quotesType,
            quotesTime,
        } = req.body;

        const quote = new Quote({
            quotesName,
            quotesEmail,
            quotesPhone,
            quotesZipcode,
            quotesDirection,
            quotesType,
            quotesTime,
        });

        if (req.files?.img) {
            const result = await uploadInvoiceImage(req.files.img.tempFilePath);
            quote.img = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.img.tempFilePath);
        }
        await quote.save();

        res.status(201).json(quote);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// getQuoteById Controller
export const getQuoteById = async (req: any, res: any) => {
    try {
        const quote = await Quote.findById(req.params.id);

        if (!quote)
            return res.status(404).json({ message: 'Quote no encontrado' });
        res.status(200).json(quote);
    } catch (error: any) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// deleteQuote Controller
export const deleteQuote = async (req: any, res: any) => {
    try {
        const quote = await Quote.findByIdAndDelete(req.params.id);

        if (!quote)
            return res.status(404).json({ message: 'Quote no encontrado' });

        await deleteImage(quote.img);
        res.status(204).json(quote);
    } catch (error: any) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// updateQuote Controller
export const updateQuote = async (req: any, res: any) => {
    try {
        const updatedQuote = await Quote.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedQuote)
            return res.status(404).json({ message: 'Quote no encontrado' });
        res.status(200).json(updatedQuote);
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};
