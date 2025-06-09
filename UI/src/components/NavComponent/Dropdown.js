import './Dropdown.css'
function Dropdown()
{
    return (
        <>
        <div className='flex flex-col dropDownProfile' 
                style={{
                backgroundColor:'white',
                border:'1px solid black',
                borderRadius:'10px'

                }}>

                  <ul className='flex flex-col gap-4' style={{listStyle:'none',color:'black',padding:'10px'}}>
                    <li>Login/Register</li>
                    <li style={{paddingLeft:'20px'}}>Servies</li>
                    <li style={{paddingLeft:'20px'}}>Contact</li>
                    <li style={{paddingLeft:'20px'}}>About</li>
                    <li style={{paddingLeft:'20px'}}>Support</li>
                  </ul>
                </div>
        </>
    )
    
}

export default Dropdown;