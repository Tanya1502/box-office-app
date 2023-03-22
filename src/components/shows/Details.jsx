import styled from 'styled-components';

const Details = props => {
  const { status, premiered, network } = props;
  return (
    <DetailsWrapper>
      <p>Status: {status}</p>008
      <p>
        Premiered: {premiered} {!!network && `on ${network.name}`}{' '}
      </p>
      <p></p>
    </DetailsWrapper>
  );
};

export default Details;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;
