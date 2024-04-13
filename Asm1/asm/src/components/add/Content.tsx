import React from 'react'
import '../../css/add.css'
type Props = {}

const Content = (props: Props) => {
  return (
    <div>
        <div className="add">
            <h1>Thêm sản phẩm</h1>
            <form action="" >
                <div className="ip-form">
                    <label >Tên sản phẩm </label><br/>
                    <input type="text" name="" placeholder="Tên sản phẩm"/>
                </div>

                <div className="ip-form">
                    <label >Giá sản phẩm </label><br/>
                    <input type="text" name="" placeholder="Giá sản phẩm"/>
                </div>

                <div className="ip-form">
                    <label >Mô tả sản phẩm </label><br/>
                    <input type="text" name="" placeholder="Mô tả sản phẩm"/>
                </div>

                <div className="ip-form">
                    <label >Ảnh sản phẩm </label><br/>
                    <input type="file" name="" placeholder="Ảnh sản phẩm"/>
                </div>

                <button type="submit">Thêm mới sản phẩm</button>
            </form>
        </div>
    </div>
  )
}

export default Content
