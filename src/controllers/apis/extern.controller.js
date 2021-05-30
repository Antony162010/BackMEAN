const { PubSub } = require("@google-cloud/pubsub");

const pubSub = new PubSub({
    credentials: {
        client_email: process.env.GC_EMAIL,
        private_key: process.env.GC_PRIVATE_KEY,
    },
    projectId: process.env.GC_PROJECT_ID,
});

const ExternController = {};

ExternController.sendMessage = async (req, res) => {
    try {
        const report = req.body;

        const buffer = Buffer.from(JSON.stringify(report));
        await pubSub.topic(`${process.env.GC_PUBSUB_TOPIC}`).publish(buffer);

        res.status(200).json({status: "correct"});
    } catch (error) {
        console.error(error);
        res.status(500).json({status: 'failed'});
    }
};

module.exports = ExternController;