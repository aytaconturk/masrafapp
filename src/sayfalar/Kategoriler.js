import Menu from "../components/Menu";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useEffect, useState } from "react";
import { api } from "../api";

const Kategoriler = () => {
    const [kategorilerVeri, setKategorilerVeri] = useState([]);
    const [veriGuncelle, setVeriGuncelle] = useState(false);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const onSubmit = (e) => {
        e.preventDefault()

        let veri = {
            kategoriAdi: document.getElementById("kategoriAdi")?.value,
            olusturulmaTarihi: new Date()
        }

        console.log("veri: ", veri)

        new Promise((resolve) => {
            let url = "/kategoriler/kategori-ekle";

            api()
                .post(url, veri)
                .then((yanit) => {
                    console.log("yanit: ", yanit)
                    setVeriGuncelle(true);
                })
        })
    }

    const veri = () => {

        new Promise((resolve) => {
            let url = "/kategoriler/kategori-listesi";

            api()
                .get(url)
                .then((yanit) => {
                    console.log("yanit: ", yanit)
                    setKategorilerVeri(yanit.data)
                    setVeriGuncelle(false);
                })
        })
    }

    useEffect(() => {
        veri()
    }, [veriGuncelle])

    console.log("Kategoriler veri: ", kategorilerVeri)

    return (
        <div className="main">
            <Menu />
            <div className="content">
                <div className="container-sm pt-3">
                    <div className="content-list mt-2">
                        <div className="mb-4 d-flex justify-content-between align-items-center">
                            <h5 className="text-dark">Kategoriler</h5>
                            <button onClick={() => toggle()} className="btn btn-primary btn-sm"><i className="fa fa-plus-circle" aria-hidden="true"></i> Kategori Ekle</button>
                        </div>
                        <ul className="list-group">
                            {
                                kategorilerVeri.length > 0 ?
                                kategorilerVeri.map(e => {
                                    return (
                                        <li key={e.id} className="list-group-item d-flex justify-content-between align-items-center">
                                            {e.kategoriAdi}
                                            <div>
                                                <span type="button" className="text-primary me-2"><i className="fa fa-pencil" aria-hidden="true"></i></span>
                                                <span type="button" className="text-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></span>
                                            </div>
                                        </li>
                                    )
                                })
                                : (
                                    <li className="text-danger list-group-item d-flex justify-content-between align-items-center">
                                        Kategori Listesi Boş!
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <Modal isOpen={modal} toggle={toggle} backdrop="static" centered={true}>
                <ModalHeader toggle={toggle}>Kategori Ekle</ModalHeader>
                <form onSubmit={onSubmit}>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Kategori Adi: </label>
                            <input required type="text" className="form-control" id="kategoriAdi"
                                placeholder="Yemek" />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="primary" onClick={toggle}>Kaydet</Button>
                    </ModalFooter>
                </form>

            </Modal>
        </div>
    )
}

export default Kategoriler;