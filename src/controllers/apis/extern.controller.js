const { PubSub } = require("@google-cloud/pubsub");
const AWS = require("aws-sdk");

const pubSub = new PubSub({
  credentials: {
    client_email: process.env.GC_EMAIL,
    private_key: process.env.GC_PRIVATE_KEY,
  },
  projectId: process.env.GC_PROJECT_ID,
});

const sns = new AWS.SNS({
  apiVersion: "2010-03-31",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
const ExternController = {};

ExternController.sendMessage = async (req, res) => {
  try {
    const report = req.body;

    const buffer = Buffer.from(JSON.stringify(report));
    await pubSub.topic(`${process.env.GC_PUBSUB_TOPIC}`).publish(buffer);
    sns
      .publish({
        Message: JSON.stringify(report),
        TopicArn: process.env.AWS_SNS_TOPIC,
      })
      .promise();

    res.status(200).json({ status: "correct" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failed" });
  }
};

module.exports = ExternController;
