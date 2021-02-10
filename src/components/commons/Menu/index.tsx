import MenuItem from '../../molecules/MenuItem'

import styled, { StyledComponentBase } from 'styled-components'
import { menuItems } from '../../../data/menu-items'

const Menu = () => {
    return (
        <MenuWrapperStyle>
            <MenuWrapperStyle.Left>logo</MenuWrapperStyle.Left>
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
                <button type="button">Entrar</button>
                <button type="button">Cadastrar</button>
            </MenuWrapperStyle.Rigth>
        </MenuWrapperStyle>
    )
}

export default Menu

interface StyleProps extends StyledComponentBase<any, {}> {
    Left?: any
    Center?: any
    Rigth?: any
}

export const MenuWrapperStyle: StyleProps = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
MenuWrapperStyle.Left = styled.div``
MenuWrapperStyle.Center = styled.div``
MenuWrapperStyle.Rigth = styled.div``
