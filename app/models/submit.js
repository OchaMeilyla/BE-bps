const connection = require("./databases");
const sequelize = require("sequelize");

const submit = connection.define(
    "RekapData",
    {
      nama_pegawai: { type: sequelize.DataTypes.STRING },
      tanggal_kegiatan: { type: sequelize.DataTypes.DATE},
      nama_kegiatan: { type: sequelize.DataTypes.TEXT},
      volume_kegiatan: {type: sequelize.DataTypes.INTEGER},
      satuan_kegiatan: {type: sequelize.DataTypes.TEXT},
      waktu_mulai: {type: sequelize.DataTypes.TIME},
      waktu_selesai: {type: sequelize.DataTypes.TIME}  
    },
    {
        freezeTableName: true,
        timestamps:false,
    }
);

module.exports = submit;
