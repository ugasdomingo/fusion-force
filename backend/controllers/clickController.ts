//Import tools
import CallClick from '../models/CallClick';

export const registerClick = async (req: any, res: any) => {
    try {
        const { userClick } = req.body;

        const newClick = new CallClick({ userClick });

        await newClick.save();

        res.status(200).json({ message: 'Click agregado' });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const getAllCallsClick = async (req: any, res: any) => {
    try {
        const callClicks = await CallClick.find().lean();

        res.status(200).json(callClicks);
    } catch (error: any) {}
};

export const getTotalClick = async (req: any, res: any) => {
    try {
        const callClicks = await CallClick.find().lean();

        res.status(200).json(callClicks.length);
    } catch (error: any) {}
};
