const path = require('path');
const fs = require('fs');
const { getImageConfig } = require('../tools/config');

//joining path of directory 
const directoryPath = path.join('public/images');
const supportedExtensions = ['jpg','jpeg','gif','tiff','png'];

exports.getImageData = (config) => {
  let imageNames = fs.readdirSync(directoryPath, {withFileTypes: true})
    .filter(item => !item.isDirectory())
    .map(item => item.name.split('.'))
    .filter(item => supportedExtensions.includes(item.slice(-1).toString().toLowerCase()));
    
  if (config?.order === 'reverse') imageNames = imageNames.reverse();
  if (config?.order === 'random') imageNames = imageNames.sort(() => Math.random() - 0.5);

  imageNames = imageNames.slice(0, config?.limit ? config.limit : 100);

  const imageData = imageNames.map((imageName) => {
    const fileName = imageName.slice(0, -1).join('.')
    const fileType = imageName.slice(-1)
    return getImageConfig(fileName, fileType);
  });

  return imageData;
}
