import styled from "styled-components";
import { colors } from "../../assets/colors";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 800px;
    background: ${colors.mainGrey};
    box-shadow: rgb(0 0 0 / 45%) 0px 5px 15px;
`;

export const ProfileTextContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    justify-content: center;
`;

export const CenterContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
    flex-direction: column;
`;

export const Title = styled.p`
    font-size: 3em;
    margin: 0;
    font-weight: 600;
    color: ${colors.brightMain};
`;

export const ProfileText = styled.p`
    font-size: 1.2em;
    margin: 0;
    color: ${colors.contrastGrey};
`;

export const CB = styled.label`
    color: ${colors.brightMain};
    font-weight: 600;
`;

export const WhoText = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    width: 800px;
    background: ${colors.contrastGrey};
    box-shadow: rgb(0 0 0 / 45%) 0px 5px 15px;
`;

export const BlockContainer = styled.div`
    display: flex;
    color: ${colors.mainGrey};
    height: 400px;

    h2 {
        font-size: 2em;
        font-weight: 600;
        margin: 0;
    }

    th,
    td,
    p {
        font-size: 1.2em;
        text-align: justify;
        margin: 0 3px;
    }

    th {
        font-weight: 600;
        margin-right: 10px;
    }
`;

export const AboutContainer = styled.div`
    padding: 0 10%;
`;

export const BlackContainer = styled.div`
    flex: 1;
    background: ${colors.mainGrey};
    padding: 15px;
    color: ${colors.contrastGrey};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 35px;

    h2 {
        margin: 0;
        margin-bottom: 15px;
    }

    p {
        text-align: left;
    }
`;

export const CImage = styled.div`
    width: 400px;
    height: 400px;
    background-size: cover;
    justify-content: flex-end;
    align-items: flex-end;
    display: flex;

    label {
        background: rgb(0 0 0 / 35%);
        color: rgb(255 255 255 / 70%);
        font-weight: 100;
        padding: 0 10px;
    }
`;

export const IPTImage = styled(CImage)`
    background-position: -163px;
    background-image: url("${process.env.PUBLIC_URL}/images/IPT_campus.jpg");
`;

export const CenitImage = styled(CImage)`
    background-position: -46px;
    background-image: url("${process.env.PUBLIC_URL}/images/Cenit_Tom.jpg");
`;

export const WhiteContainer = styled.div`
    flex: 1;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 35px;

    h2 {
        margin: 0;
        margin-bottom: 15px;
    }

    p {
        text-align: left;
    }
`;
