const {MasterVendors} = require("../../../models")

const get_vendors = async (req, res) => {
    try{
        const master_vendors = await MasterVendors.findAll({
            attributes: ['id', 'name'], 
            where: { is_active: true }
        })
        res.status(200).json(master_vendors);
    }
    catch (error) {
        console.error("Error fetching Vendors from master table: ", error)
        res.status(500).json({ message : "Internal server Error", error: error.message });
    }
}

module.exports={
    get_vendors
}