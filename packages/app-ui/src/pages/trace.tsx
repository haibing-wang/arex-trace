import {useQuery} from "@apollo/client";
import {Button, Divider, Drawer, Form, Input, Table} from "antd";
import {GetTraceOverviewDocument,} from "../helpers/backend/gen/graphql.ts";
import {css} from "@emotion/react";
import {useState} from "react";
import ReactECharts from 'echarts-for-react';

const Trace = () => {
  const [drawerShow,setDrawerShow] = useState(false)
  const {data:GetTraceOverviewDocumentData} = useQuery(GetTraceOverviewDocument)

  const [form] = Form.useForm();
  const columns = [{
    title:'Username',
    dataIndex:'key'
  },

    {
      title:'Visits',
      dataIndex:'value'
    },
  ]
  return <div>
    <Drawer title={'创建'} open={drawerShow} width={'75%'} onClose={()=>{
      setDrawerShow(false)
    }}>
      <Form
        form={form}
        name="wrap"
        onFinish={()=>{
          setDrawerShow(false)
        }}
      >
        <Form.Item label="id" name="id" css={css`display: none`}>
          <Input />
        </Form.Item>

        <Form.Item label="名称" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label={false}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
    <Table size={'small'} rowKey={'id'} columns={columns} dataSource={GetTraceOverviewDocumentData?.getTraceOverview.user||[]}/>

    <div css={css`display: flex;height: 360px`}>
      {
        [{title:'Path',key:'url'},{title:'Browser',key:'browser'},{title:'OS',key:'os'},].map(({key,title})=>(
          <>
            <ReactECharts css={css`flex: 1`} option={{
              title: {
                text: title,
                left: 'center'
              },
              tooltip: {
                trigger: 'item'
              },
              legend: {
                orient: 'vertical',
                left: 'left'
              },
              series: [
                {
                  name: 'Access From',
                  type: 'pie',
                  radius: '50%',
                  // @ts-ignore
                  data: GetTraceOverviewDocumentData?.getTraceOverview[key].map(i=>({name:i.key,value:i.value})),
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            }}/>
            {key!=='os'&&<Divider type={'vertical'} css={css`height: 100%`}/>}
          </>
        ))
      }
    </div>
  </div>
}

export default Trace
