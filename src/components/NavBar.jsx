import { AppBar, Toolbar,styled } from "@mui/material";

styled(AppBar)`

`

const NavBar=()=>{
    return(
        <AppBar>
            <Toolbar>
                <p>Sarfaraz Crud</p>
                <p>All Users</p>
                <p>Add Users</p>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;