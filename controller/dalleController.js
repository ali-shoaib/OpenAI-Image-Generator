import {Configuration,OpenAIApi} from 'openai';
import { OPENAI_KEY } from '../config/index.js';

const configuration = new Configuration({
    apiKey: OPENAI_KEY
})

const openai = new OpenAIApi(configuration);

const DalleController={
    async getImage(req, res){
        try {
            const {prompt, size} = req.body;

            const imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' :  '1024x1024';

            const aiResponse = await openai.createImage({
                prompt,
                n:1,
                size: imageSize,
                response_format:'b64_json'
            })

            const image = aiResponse.data.data[0].b64_json;

            return res.status(200).json({photo: image});
        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
                console.log(error.response.data);
            } else {
                console.log(error.message);
            }
            res.status(500).send(error?.response.data.error.message || 'Something went wrong');
        }
    }
}

export default DalleController;