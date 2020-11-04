import React from 'react'
import { Input, Form } from "antd"

const SearchBar = (props) => {
  return (
    <Form
      layout="vertical"
      onFinish={null}
      onFinishFailed={null}
    >
      <Form.Item
        label="Video Search"
        name="term"
      >
        <Input.Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={props.onSearchSubmit}
        />
      </Form.Item>
    </Form>
  )
}

export default SearchBar