import prod from "../models/cadprodModel.js"
import path from "path"
// import mysql from "mysql2"

export const getProd = async (req, res) =>{
    try{
        const response = await prod.findAll();
        res.json(response)
    } catch(error){
        console.log(error.message)
    }
}

export const getProdbyId = async (req, res) =>{ //pega o bixo pelo id
    try{ //tente
        const response = await prod.findOne({ //procure 1
            where: {
                id: req.params.id
            }
        });
        res.json(response)
    } catch(error){
        console.log(error.message)
    }
}
export const saveProd = (req, res) =>{

   if(req.files === null) return res.status(400).json({msg: "Deu certo não ó, tem que mandar uma ae"})
    console.log(req.files)
   
    //imagem do bixinho
    const file = req.files.foto;
    const fileSize = file.data.length;
    const ext = path.extname(file.name)
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`
    const allowedType = ['.png','.jpg','.jpeg'];

   if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg:"serve essa não patrão"})
    if(fileSize > 5000000) return res.status(422).json({msg:"a foto é grande demais fi"})
    file.mv(`./public/images/${fileName}`, async(err)=>{
       if(err) return res.status(500).json({msg: err.message})
    try{
    prod.create({

        nome_produto : req.body.nome_produto,
        imagem: fileName,
        selo_produto : req.body.selo_produto,
        categoria : req.body.categoria,
        tamanho : req.body.tamanho,
        preco_produto : req.body.preco_produto,
        material_produto : req.body.material_produto,
        durabilidade_produto : req.body.durabilidade_produto,
        url: url
    })
    res.status(201).json({msg:"animalzinho foi pra doação ó"})
    }catch(error) {
    console.log(error.message);
    }
    })}

