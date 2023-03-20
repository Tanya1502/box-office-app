const Details = props => {
  const { status, premiered, network } = props;
  return (
    <div>
      <p>Status: {status}</p>008
      <p>
        Premiered: {premiered} {!!network && `on ${network.name}`}{' '}
      </p>
      <p></p>
    </div>
  );
};

export default Details;
