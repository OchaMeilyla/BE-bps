const connection = require ("./databases");
const sequelize = require ("sequelize");

const rekap = connection.define(
    "RekapData",
    {
      nama_pegawai: { type: sequelize.DataTypes.STRING },
      tanggal_kegiatan: { type: sequelize.DataTypes.DATE},
      nama_kegiatan: { type: sequelize.DataTypes.TEXT},
      volume_kegiatan: {type: sequelize.DataTypes.INTEGER},
      satuan_kegiatan: {type: sequelize.DataTypes.TEXT},
      lama_kegiatan_jam: {type: sequelize.DataTypes.INTEGER},
      lama_kegiatan_menit: {type: sequelize.DataTypes.INTEGER}  
    },
    {
        freezeTableName: true,
        timestamps:false,
    }
);

module.exports = rekap;

