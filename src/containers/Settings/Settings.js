import React,{Component} from 'react';
import SettingsForm from '../../components/SettingsForm/SettingsForm';
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Settings extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
        return(
            <Form>
               <Form.Field label='Pomodoro Daily Goal' control='input' type='number' min={0} /> 
                    <Form.Field>
                        <label>Pomodoro</label>
                        <input type='number' min={0}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Short Break</label>
                        <input type='number' min={0}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Long Break</label>
                        <input type='number' min={0}/>
                    </Form.Field>
                <Link to='/'>                    
                    <Button color='blue'>
                        Save
                    </Button>
                </Link>
                    <Button color='red'>Reset</Button>
            </Form>
        );
    }
}

export default Settings;