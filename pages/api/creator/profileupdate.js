import Creator from "@/model/Creator";
import connectDB from "@/middleware/mongoose";


const login = async (req, res) => {
    if (req.method === 'POST' && req.headers.authorization) {
        const base64Credentials = req.headers.authorization?.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        if (credentials === process.env.USER_ID + ":" + process.env.PASSWORD) {
            try {
                const creator = await Creator.findOne({ email: req.body.email });
                if (creator) {
                    creator.name = req.body.name;
                    creator.email = req.body.email;
                    creator.role = "creator";
                    creator.profileImage = req.body.profileImage?req.body.profileImage:creator.profileImage;
                    creator.bannerImages = req.body.bannerImages?req.body.bannerImages:creator.bannerImages;
                    creator.category = req.body.category?req.body.category:creator.category;
                    creator.location = req.body.location?req.body.location:creator.location;
                    creator.achievments = req.body.achievments?req.body.achievments:creator.achievments;
                    creator.description = req.body.description?req.body.description:creator.description;
                    creator.packages = req.body.packages?req.body.packages:creator.packages;
                    creator.sample = req.body.sample?req.body.sample:creator.sample;
                    await creator.save();
                    res.status(200).json({ success: true, message: "Creator Updated" });
                    return;
                }else{
                    await Creator.create({
                        name: req.body.name,
                        email: req.body.email,
                        role: "creator",
                    });
                    res.status(200).json({ success: true, message: "Creator Added" });

                }

            } catch (err) {
                res.status(200).json({ success: false, message: 'Invalid request' });
            }

        } else {
            res.status(200).json({ message: "Hello bhai padhai karlo" });
        }
    }
    else {
        res.status(200).json({ message: "Abeyy Padhai likhai karo IAS~YAS Bano" });
    }
}

export default connectDB(login);
