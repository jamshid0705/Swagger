const Book=require('../model/book')

const getAll=async(req,res)=>{
  try {
    const book=await Book.findAll()
    res.status(200).json(book)
  } catch (error) {
    res.status(404).json(error.message)
  }
}

const add = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const update= async (req, res) => {
  try {
    
    const book = await Book.update(req.body,{where:{id:req.params.id}})
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json(error.message);
  }
};


const getOne= async (req, res) => {
  try {
    const book = await Book.findOne({where:{id:req.params.id}});
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.destroy({ where: { id: req.params.id } });
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

module.exports={add,getAll,getOne,deleteBook,update}