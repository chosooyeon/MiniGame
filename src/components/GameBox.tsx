import Box from '@mui/material/Box';

const GameBox = () => {
  const miniGame = ['가위바위보', '다른 글자 찾기 게임', '짝 맞추기 게임', '메모리 게임']

  return (
    <>
    {miniGame.map((item) => (
      <Box margin={2}
        sx={{ width: 300, height: 300, backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          }}}>
        
          <div>
            {item}
          </div>
      </Box>
    ))}
    </>
  );
}


export default GameBox