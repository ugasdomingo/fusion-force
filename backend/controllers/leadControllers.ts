//Import tools
import Lead from '../models/Lead';
import { uploadInvoiceImage, deleteImage } from '../utils/cloudinary';
import fs from 'fs-extra';

// getAllLeads --> Line 10
// createLead --> Line 20
// getLead --> Line 34
// deleteLead --> Line 47
// updateLead --> Line 60

// getAllLeads Controller
export const getAllLead = async (req: any, res: any) => {
    try {
        const leads = await Lead.find();
        res.status(200).json({ leads });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// createLead Controller
export const createLead = async (req: any, res: any) => {
    try {
        const { date, leadsName, leadsEmail, leadsPhone, askFor, callOnDate } =
            req.body;

        const lead = new Lead({
            date,
            leadsName,
            leadsEmail,
            leadsPhone,
            callOnDate,
            askFor,
        });

        if (req.files?.img) {
            const result = await uploadInvoiceImage(req.files.img.tempFilePath);
            lead.img = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.img.tempFilePath);
        }
        await lead.save();

        res.status(201).json({ lead });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// getLead Controller
export const getLead = async (req: any, res: any) => {
    try {
        const lead = await Lead.findById(req.params.id);

        if (!lead)
            return res.status(404).json({ message: 'Lead no encontrado' });
        res.status(200).json(lead);
    } catch (error: any) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// deleteLead Controller
export const deleteLead = async (req: any, res: any) => {
    try {
        const lead = await Lead.findByIdAndDelete(req.params.id);

        if (!lead)
            return res.status(404).json({ message: 'Lead no encontrado' });

        await deleteImage(lead.img);
        res.status(204).json(lead);
    } catch (error: any) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// updateLead Controller
export const updateLead = async (req: any, res: any) => {
    try {
        const updatedLead = await Lead.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedLead)
            return res.status(404).json({ message: 'Lead no encontrado' });
        res.status(200).json(updatedLead);
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};
