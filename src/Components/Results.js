const Results = ({onRestart, appScore}) => {
    return (
        <div>
            <p>끝났음</p>
            <p>최종 점수: {appScore}</p>
            <button onClick={()=>{onRestart()}}>다시 시작</button>
        </div>
    );
};

export default Results;