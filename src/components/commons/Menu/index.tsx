import MenuItem from '../../molecules/MenuItem'
import Button from '../../atoms/Button'

import { menuItems } from '../../../data/menu-items'

import { MenuWrapperStyle } from './styles'
import HandLogo from '../../atoms/HandLogo'

const Menu = () => {
    return (
        <MenuWrapperStyle>
            <MenuWrapperStyle.Left>
                <HandLogo />
            </MenuWrapperStyle.Left>
            <MenuWrapperStyle.Center as="ul">
                {menuItems &&
                    menuItems.map((item: { url: string; name: string }) => (
                        <MenuItem
                            key={item.url}
                            name={item.name}
                            url={item.url}
                        />
                    ))}
            </MenuWrapperStyle.Center>
            <MenuWrapperStyle.Rigth>
                <Button ghost type="button">
                    Entrar
                </Button>
                <Button type="button">Cadastrar</Button>
            </MenuWrapperStyle.Rigth>
        </MenuWrapperStyle>
    )
}

export default Menu
