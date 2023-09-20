function CustomerCreate() {
    return (
        <>
        <div class="back" style="margin-top: 30px">
            <a>
                <button class="btn btn-primary">Quay lại</button>
            </a>
        </div>
        <div class="container-fluid" style="min-height: 500px" align="center">
            <div class="bg-light p-5" style="max-width: 40%">
                <h2 class="mb-4" style="text-align: center">Khách hàng</h2>
                <form  method="post" >
                    <div class="form-group">
                        <label class="form-label" htmlFor="name">Họ tên<span style="color: red">*</span>:</label>
                        <div >
                            <input type="text" id="name" class="form-control" style="width: 100%"/>
                        </div>

                    </div>
                    <div class="form-group">
                        <label class="form-label" htmlFor="date">Ngày sinh<span style="color: red">*</span>:</label>
                        <div>
                            <input type="text" id="date" class="form-control" style="width: 100%"/>
                        </div>

                    </div>
                    <div class="form-group">
                        <label class="form-label" htmlFor="gender">Giới tính<span style="color: red">*</span>:</label>
                        <div>
                            <input type="text" id="gender" class="form-control" style="width: 100%"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" htmlFor="cccd">SỐ CCCD<span style="color: red">*</span>:</label>
                        <div>
                            <input type="text" id="cccd" class="form-control" style="width: 100%"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" htmlFor="phone">Số điện thoại<span style="color: red">*</span>:</label>
                        <div>
                            <input type="text" id="phone" class="form-control" style="width: 100%"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" htmlFor="email">Email<span style="color: red">*</span>:</label>
                        <div>
                            <input type="text" id="email" class="form-control" style="width: 100%"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" htmlFor="address">Địa chỉ<span style="color: red">*</span>:</label>
                        <div>
                            <input type="text" id="address" class="form-control" style="width: 100%"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label" htmlFor="type">Loại khách<span style="color: red">*</span>:</label>
                        <div>
                            <input type="text" id="type" class="form-control" style="width: 100%"/>
                        </div>
                    </div>
                    <div style="margin-top: 20px" class="form-group mb-0">
                        <input type="submit" value="Lưu" class="btn btn-primary px-3"/>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}