import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-info" style="margin-top: 3%">
                                <h3>Thông tin liên hệ</h3>
                                <p>Địa chỉ: 123 Đường Chế Lan Viên, Quận 3, TP. ĐN</p>
                                <p>Số điện thoại: 0901234567</p>
                                <p>Email: thePaladin@diablo.com</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="social-media" style="margin-top: 3%">
                                <h3>Kết nối với chúng tôi</h3>
                                <ul className="list-inline social-icons">
                                    <li className="list-inline-item"><a href="#"><i
                                        className="fab fa-facebook">Facebook.com</i></a></li>
                                    <li className="list-inline-item"><a href="#"><i
                                        className="fab fa-instagram">Instagram.com.vn</i></a></li>
                                    <li className="list-inline-item"><a href="#"><i
                                        className="fab fa-twitter">Twitter</i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="footer-bottom text-center">
                                <p>&copy; 2023 The Paladin. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;