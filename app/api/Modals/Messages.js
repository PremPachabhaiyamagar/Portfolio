import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
	email: {
		type: String,
	},
	message: {
		type: String,
	},
});

const Message = models.Message || model("Message", MessageSchema);

export default Message;
