const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  try {
    const tagAll = await Tag.findAll({
      // be sure to include its associated Products

      include: [
        {
          model: Product,
          attributes: ["id", "price", "product_name", "stock", "category_id"],
        },
      ],
    });
    res.status(200).json(tagAll);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagOne = await Tag.findOne({
      // be sure to include its associated Products
      where: {
        id:req.params.id
      },
      include: [
        {
          model: Product,
          attributes: ["id", "price", "product_name", "stock", "category_id"],
        }
      ],
    });
    res.status(200).json(tagOne);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name : req.body.tag_name
   });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
      id:req.params.id
      }
    });
    if (!updateTag) {
      res.status(404).json({ message: "No new tag update!" });
      return;
    }
    res.status(200).json(updateTag)
  }catch(err){
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try{
    const deleteTag = await Tag.destroy({
      where: {
      id:req.params.id
      }
    });
    if (!deleteTag) {
      res.status(404).json({ message: "No deleted tag!" });
      return;
    }
    res.status(200).json(deleteTag)
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
