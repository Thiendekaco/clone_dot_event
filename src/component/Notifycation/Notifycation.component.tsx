import { NotifyBox, ValueText } from "./Notifycation.styles";
import { XCircle } from "phosphor-react";

const NotifyCationBox = () =>(
   < NotifyBox >
       <XCircle size={30} weight={"fill"} color="#A41313"/>
       <ValueText>User Reject Request</ValueText>
   </NotifyBox>

)

export  default  NotifyCationBox;