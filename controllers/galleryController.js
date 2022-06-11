const path = require('path');
const fs = require('fs');
const { getImageConfig } = require('../tools/config');

//joining path of directory 
const directoryPath = path.join('public/images');

exports.getImageData = async (config) => {
  let imageNames = fs.readdirSync(directoryPath, {withFileTypes: true})
    .filter(item => !item.isDirectory())
    .map(item => item.name.split('.')[0])
    
  if (config?.order === 'reverse') imageNames = imageNames.reverse();
  if (config?.order === 'random') imageNames = imageNames.sort(() => Math.random() - 0.5);

  imageNames = imageNames.slice(0, config?.limit ? config.limit : 100);

  const imageData = imageNames.map((imageName) => ({...getImageConfig(imageName)}));

  console.log(imageData)

  return imageData;
}
