import MyButton from './MyButton';

export default {
    title: 'MyApp/MyButton',
    component: MyButton,
}

// export const Index = {
//     render: () => <MyButton primary size={'medium'} label={'ボタン'} onClick={() => console.log('Hello, Storybook!!!')}/>,
// }
//
// export const White = {
//     render: () => <MyButton primary size={'small'} label={'ボタン'} backgroudColor={"#fff"}/>,
// }

export const Index = {
    render: args => <MyButton {...args} />,
    args: {
        primary: true,
        size: 'medium',
        label: 'ボタン',
        onClick: () => console.log('Hello, Storybook!!!'),
    }
}

export const White = {
    render: args => <MyButton {...args} />,
    args: {
        primary: false,
        size: 'small',
        label: 'ボタン',
        backgroundColor: '#fff',
    }
}

export const Yellow ={
    args: {
        ...White.args,
        backgroundColor: 'lightyellow'
    }
}