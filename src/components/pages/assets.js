import React, {Component} from 'react';
import ScriptTag from 'react-script-tag';


class Scripts extends Component{
    render(){
        return(
            <React.Fragment>
                <ScriptTag isHydrating={true} type='text/javascript' src="../assets/js/jquery-migrate-3.0.1.min.js"/>
                <ScriptTag isHydrating={true} type='text/javascript' src="../assets/js/jquery.easing.1.3.js"/>
                <ScriptTag isHydrating={true} type='text/javascript' src="../assets/js/jquery.waypoints.min.js"/>
                <ScriptTag isHydrating={true} type='text/javascript' src="../assets/js/jquery.stellar.min.js"/>
                <ScriptTag isHydrating={true} type='text/javascript' src="../assets/js/owl.carousel.min.js"/>
                <ScriptTag isHydrating={true} type='text/javascript' src="../assets/js/jquery.magnific-popup.min.js"/>
                <ScriptTag isHydrating={true} type='text/javascript' src="../assets/js/jquery.animateNumber.min.js"/>
                <ScriptTag isHydrating={true} type='text/javascript' src="../assets/js/bootstrap-datepicker.js"/>
                <ScriptTag isHydrating={true} type='text/javascript' src="../assets/js/scrollax.min.js"/>
                <ScriptTag isHydrating={true} type='text/javascript' src="../assets/js/google-map.js"/>
                <ScriptTag isHydrating={true} type='text/javascript' src="../assets/js/main.js"/>
            </React.Fragment>
        )
    }
}

export default Scripts;
