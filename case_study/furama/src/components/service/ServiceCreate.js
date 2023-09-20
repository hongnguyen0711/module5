function ServiceCreate() {
    return (
        <>
            <div className="back"  style={{marginTop: "30px"}} >
                <a>
                    <button className="btn btn-primary">Quay lại</button>
                </a>
            </div>
            <div className="container-fluid" style="min-height: 500px" align="center">
                <div className="bg-light p-5" style="max-width: 40%">
                    <h2 className="mb-4" style="text-align: center">Dịch vụ</h2>
                    <form method="post">
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Tên dịch vụ<span
                                style={{color: "red"}}>*</span>:</label>
                            <div>
                                <input type="text" id="name" className="form-control" style={{width: "100%"}}/>
                            </div>

                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="area">Diện tích<span
                                style={{color: "red"}}>*</span>:</label>
                            <div>
                                <input type="text" id="area" className="form-control" style={{width: "100%"}}/>
                            </div>

                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="money">Chi phí thuê<span style={{color: "red"}}>*</span>:</label>
                            <div>
                                <input type="text" id="money" className="form-control" style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="person">Số lượng người tối đa<span
                                style={{color: "red"}}>*</span>:</label>
                            <div>
                                <input type="text" id="person" className="form-control" style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="type">Kiểu thuê<span
                                style={{color: "red"}}>*</span>:</label>
                            <div>
                                <input type="text" id="type" className="form-control" style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="standard">Tiêu chuẩn phòng<span
                                style={{color: "red"}}>*</span>:</label>
                            <div>
                                <input type="text" id="standard" className="form-control" style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="floor">Số tầng<span
                                style={{color: "red"}}>*</span>:</label>
                            <div>
                                <input type="text" id="floor" className="form-control" style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="poor">Diện tích hồ bơi<span
                                style={{color: "red"}}>*</span>:</label>
                            <div>
                                <input type="text" id="poor" className="form-control" style={{width: "100%"}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="more">Tiện nghi khác<span style={{color: "red"}}>*</span>:</label>
                            <div>
                                <input type="text" id="more" className="form-control" style={{width: "100%"}}/>
                            </div>
                        </div>

                        <div style="margin-top: 20px" className="form-group mb-0">
                            <input type="submit" value="Lưu" className="btn btn-primary px-3"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}