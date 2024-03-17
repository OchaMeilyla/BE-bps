const submit = require('../models/submit')
const RekapData = require('../models/rekap')

function addData(req,res,next){
    if(req.body.nama_pegawai == "" || req.body.tanggal_kegiatan == "" || req.body.nama_kegiatan == "" || req.body.volume_kegiatan == "" || req.body.satuan_kegiatan == "" || req.body.waktu_mulai == "" || req.body.waktu_selesai == "" || req.body.bulan_kegiatan == "" ){
        res.status(400).json({
            message: "Silahkan Isi Terlebih Dahulu"
        })
        return
    }

    submit.create({
        nama_pegawai: req.body.nama_pegawai,
        tanggal_kegiatan: req.body.tanggal_kegiatan,
        nama_kegiatan: req.body.nama_kegiatan,
        volume_kegiatan: req.body.volume_kegiatan,
        satuan_kegiatan: req.body.satuan_kegiatan,
        waktu_mulai: req.body.waktu_mulai,
        waktu_selesai: req.body.waktu_selesai,
        bulan_kegiatan: req.body.bulan_kegiatan //untuk bulan
    })

    .then(function(){
        res.status(201).json({
            message: "Pendaftaran Berhasil. Terima Kasih Telah Mendaftar"
        })
    })
    .catch(function(err){
        res.status(500).json({
            error: err,
        })
    })
    return
}

function getRekapKinerja(req,res){
    RekapData.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        console.error('Gagal mengambil data dari model: ' + err.message);
        res.status(500).send('Terjadi kesalahan saat mengambil data dari model.');
    });
}

module.exports = {
    addData,
    getRekapKinerja
}