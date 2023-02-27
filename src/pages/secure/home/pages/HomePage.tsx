import { useSelector } from 'react-redux';
import { HomeLayout } from '../layout/HomeLayout';
import { NothingSelectedView } from '../views';
import { RootReducerTypes } from '../../../../redux/RootReducer';
import { CardPatient } from '../../../../components/CardPatient';

export const HomePage = () => {

    const { isSelected } = useSelector((state: RootReducerTypes) => state.patientReducer);

    return (
        <HomeLayout>
            {isSelected ? <CardPatient /> : <NothingSelectedView />}
        </HomeLayout>
    )
}