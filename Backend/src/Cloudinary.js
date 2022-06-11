import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name: 'tomcloud-0101', 
    api_key: '431637382912813', 
    api_secret: 'acVevcKCosz9uNNUe5ib02UGe-k' ,
    secure: true
})


const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'aenima',
    use_filename: true
  })
}

  const deleteImagen = async (publicId) => {
    return await cloudinary.uploader.destroy(publicId)
  }

module.exports = {

    uploadImage,
    deleteImagen
}



