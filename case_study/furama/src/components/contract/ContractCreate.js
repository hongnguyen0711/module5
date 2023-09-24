import {Link} from "react-router-dom";

export function ContractCreate() {
    return (
        <>
            <div class="back" style={{marginTop: "30px"}}>
                <Link to="/contract">
                    <button class="btn btn-outline-primary">Quay lại</button>
                </Link>
            </div>
            <div class="container-fluid" style={{minHeight: "500px"}} align="center">
                <div class="bg-light p-5" style={{maxWidth: "40%"}}>
                    <h2 class="mb-4" style={{textAlign: "center"}}>Tạo hợp đồng</h2>
                    <form method="post">
                        <div class="form-group">
                            <label class="form-label" htmlFor="name">Mã hợp đồng<span
                                style={{color: "red"}}>*</span>:</label>
                            <div>
                                <input type="text" id="name" class="form-control" style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label" htmlFor="date">Ngày bắt đầu<span
                                style={{color: "red"}}>*</span>:</label>
                            <div>
                                <input type="text" id="date" class="form-control" style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label" htmlFor="gender">Ngày kết thúc<span
                                style={{color: "red"}}>*</span>:</label>
                            <div>
                                <input type="text" id="gender" class="form-control" style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label" htmlFor="cccd">SỐ tiền cọc trước<span
                                style={{color: "red"}}>*</span>:</label>
                            <div>
                                <input type="text" id="cccd" class="form-control" style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="phone">Tổng tiền<span
                                style={{color: "red"}}>*</span>:</label>
                            <div>
                                <input type="text" id="phone" className="form-control" style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div style={{marginTop: "20px"}} class="form-group mb-0">
                            <input type="submit" value="Lưu" class="btn btn-outline-primary px-3"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}