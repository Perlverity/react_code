import {useState} from 'react';
import {Home, Mail, Info, AccountTree} from '@mui/icons-material';
import {Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon} from '@mui/material';

const menu = [
    {title: 'ホーム', href: 'home.html', icon: Home},
    {title: 'メール', href: 'mail.html', icon: Mail},
    {title: 'お知らせ', href: 'info.html', icon: Info},
    {title: 'サイトマップ', href: 'sitemap.html', icon: AccountTree},
]

export default function MaterialDrawer () {
    const [show, setShow] = useState(false)
    const handleDraw = () => setShow(!show)

    return (
        <>
            <Button onClick={handleDraw}>メニュー</Button>
            <Drawer anchor={"left"} open={show}>
                <Box sx={{height: '100vh'}} onClick={handleDraw}>
                    <List>
                        {menu.map(obj => {
                            const Icon = obj.icon
                            return (
                                <ListItem key={obj.title}>
                                    <ListItemButton href={obj.href}>
                                        <ListItemIcon><Icon /></ListItemIcon>
                                        <ListItemText primary={obj.title}/>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}