import multer from "multer"
import { access, mkdir } from "fs/promises"

const uploadFolder = "./uploads"

//Konfigūracija nuotraukų priėmimui
const storage = multer.diskStorage({
    //Kuriame kataloge bus saugomos nuotraukos
    destination: async function (req, file, cb) {
        try {
        await access(uploadFolder)
        
        } catch { 
            await mkdir(uploadFolder)
            
        }
        cb(null, uploadFolder)
    },
    //Konfigūruojama nuotraukos pavadinimas
    filename: function (req, file, cb) {
        const ext = file.originalname.split('.')
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' + ext[ext.length - 1]
      cb(null, uniqueSuffix)
    }
})
const upload = multer({
    storage: storage,
    //Konfigūruojama kokia nuotrauka bus priimta
    fileFilter: function (req, file, next) {
        if( file.mimetype === 'image/jpeg' ||
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/gif')
        {
            next(null, true)
        } else {
            next(null, false)
        }
    }
})

export default upload