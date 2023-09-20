import { FormControl, FormGroup, Input, InputLabel, Typography,styled ,Button} from "@mui/material"


const Cont=styled(FormGroup)`
    width: 50%;
    margin:5% auto 0 auto;
    & > div{
        margin-top:20px
    }
`

const AddUser=()=>{
    return(
        <Cont>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <Button variant="contained">Add User</Button>
            </FormControl>
        </Cont>
    )
}
export default AddUser;