import { Dropdown, message } from 'antd';

export default function LayoutHeader(){
    const items = [
        {
          key: '1',
          label: (
            <h1 className="text-[13px] font-bold">📁 All Tiles</h1>
          )
        },
        {
            key: '2',
            label: (
              <h1 className="text-[13px] font-bold">📄 Programming</h1>
            )
        },
        {
            key: '3',
            label: (
              <h1 className="text-[13px] font-bold">📄 Cloud</h1>
            )
        },
        {
            key: '4',
            label: (
              <h1 className="text-[13px] font-bold flex justify-between"><p>📄 IOT</p></h1>
            )
        }
    ]

    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`)
    }

    return(
        <header>
            <Dropdown
                menu={{
                    items,
                    onClick
                }}
            >
                <h1 className="text-[20px] my-6 font-bold cursor-pointer w-fit">Technology <span className="ml-2 text-[26px]">🙌</span></h1> 
            </Dropdown>
        </header>
    )

}