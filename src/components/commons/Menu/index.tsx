import MenuItem from '../../molecules/MenuItem'

import styled, { StyledComponentBase } from 'styled-components'
import { menuItems } from '../../../data/menu-items'
import Button from '../../atoms/Button'

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
                <Button ghost type="button">
                    Entrar
                </Button>
                <Button type="button">Cadastrar</Button>
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

    flex-wrap: wrap;

    margin-top: 18px;
    padding-left: 28px;
    padding-right: 28px;
`
MenuWrapperStyle.Left = styled.div`
    padding: 0;
    margin: 0;
    order: 1;
`
MenuWrapperStyle.Center = styled.div`
    padding: 0;
    margin: 0;

    order: 3;
    width: 100%;

    list-style: none;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 17px;
    padding: 12px;

    border-top: 1px solid #88989e;
    border-bottom: 1px solid #88989e;
`
MenuWrapperStyle.Rigth = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex: 1;
    order: 2;
    justify-content: flex-end;
`
