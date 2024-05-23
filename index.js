const axios = require('axios');  
const fs = require('fs');  
const path = require('path');  
  
async function downloadVideo(url, outputPath) {  
  try {  
    // 发送GET请求到视频URL  
    const response = await axios({  
      method: 'get',  
      url: url,  
      responseType: 'stream' // 指示axios将响应作为流返回  
    });  
  
    // 创建一个可写流来写入文件  
    const writer = fs.createWriteStream(outputPath);  
  
    // 处理响应流  
    return new Promise((resolve, reject) => {  
      response.data.pipe(writer);  
      let error = null;  
      writer.on('error', err => {  
        error = err;  
        writer.close();  
        reject(err);  
      });  
      writer.on('close', () => {  
        if (!error) {  
          resolve(true);  
        }  
      });  
    });  
  } catch (error) {  
    console.error('Error downloading video:', error);  
    throw error;  
  }  
}  
  
// 使用示例  
const videoUrl = 'https://sns-video-bd.xhscdn.com/stream/110/258/01e5b10842a0959f010377038d3b89e9ea_258.mp4'; // 替换为实际的视频URL  
const outputFile = path.join(__dirname, 'downloaded_video.mp4'); // 指定保存的文件路径和名称  
downloadVideo(videoUrl, outputFile)  
  .then(() => console.log('Video downloaded successfully!'))  
  .catch(error => console.error('Failed to download video:', error));