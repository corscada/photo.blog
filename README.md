# photo.blog

## installation
run `npm install`  
then `node index.js`

## recommendations
- change the license in `views/layouts/default.hbs` to one that reflects what you want
- populate `config.toml` with site info
- compress your images for web to speed up loading times
- reverse proxy or caching when used on the web

## including photos
Photos can be copied to the `public/images/` directory and will be included when the server
 is run, the only requirement is alt text be provided.  
Information on the images such as titles or alt text should be included in a toml file
 with the same name as the image file in the same directory.  
An example image config file is included below.

 ```
title = "Self Portrait"
alt = "mirror self portrait of photographer"
camera = "Fujifilm XT10"
lens = "XF35mmF2 R WR"
text = ""
 ```

