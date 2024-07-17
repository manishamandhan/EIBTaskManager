import { UserModel } from '../Model/UserModel';
import { Profilemodel } from "../Model/Profilemodel";

export interface UsersListProps {
    UsersCL: UserModel[];
    UserCL: UserModel;
    fetchData: () => void;
    Open: boolean;
    handleClose: () => void;
    handleSubmit: () => void;
    initValues: UserModel;
}
