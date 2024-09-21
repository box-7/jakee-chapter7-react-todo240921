const style = {
  // コンポーネント内で当てるcssの当て方
  // キャメルケースにする、""で囲む、末尾は;→,
  backgroundColor: '#c6e5d9',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
    //     // <div className="input-area">
    // <>

    //   {/* if (number >= 5) {
    //     <div style={style}>
    //       <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
    //       <button onClick={onClick}>追加</button>
    //     </div>
    //   } else {
    //     <div style={style}>
    //       <input placeholder="TODOを入力" value={todoText} onChange={onChange} disabled/>
    //       <button onClick={onClick} disabled>追加</button>
    //     </div>     
    //   } */}
    
    // {number >= 5 ? (
    //     <div style={style}>
    //       <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
    //       <button onClick={onClick}>追加</button>
    //     </div>
    //   ) : (
    //     <div style={style}>
    //       <input placeholder="TODOを入力" value={todoText} onChange={onChange} disabled />
    //       <button onClick={onClick} disabled>追加</button>
    //     </div>
    //   )}
    // </>
  );
};
