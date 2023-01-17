import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error("server error");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("can`t delete task");
      }

      dispatch(onClick({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const toogleStatus = createAsyncThunk(
  "todos/toogleStatus",
  async function (id, { rejectWithValue, dispatch, getState }) {
    const todo = getState().todos.todos.find((todo) => todo.id === id);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "aplication/json",
          },
          body: JSON.stringify({ complited: !todo.complited }),
        }
      );
      if (!response.ok) {
        throw new Error("can`t changei status");
      }

      dispatch(onAdd({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addNew = createAsyncThunk(
  "todos/addNew",
  async function (text, { rejectWithValue, dispatch, getState }) {
    // const todo = getState().todos.todos.find((todo) => todo.id === id);
    try {
      const todo = {
        title: text,
        userId: 1,
        complited: false,
      };

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos `,
        {
          method: "POST",
          headers: {
            "Content-Type": "aplication/json",
          },
          body: JSON.stringify(todo),
        }
      );
      if (!response.ok) {
        throw new Error("can`t asd new todo");
      }
      const data = await response.json();
      dispatch(onChange(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initialState = {
  jobs: [
    {
      title: "Filter by specialist level",
      categories: [
        {
          title: "Student",
          data: [],
        },
        {
          title: "Junior",
          data: [],
        },
        {
          title: "Mid level",
          data: [],
        },
        {
          title: "Senior",
          data: [],
        },
        {
          title: " C level",
          data: [],
        },
        {
          title: "Not defined",
          data: [],
        },
      ],
    },

    {
      title: "Filter by job category",
      categories: [
        {
          title: "Software development",
          data: [],
        },
        {
          title: "Quality Assurance /Control",
          data: [],
        },
        {
          title: " UI/UX/Graphic Design",
          data: [],
        },
        {
          title: " Product/Project Management",
          data: [],
        },
        {
          title: " Hardware design",
          data: [],
        },
        {
          title: " Other IT",
          data: [],
        },
        {
          title: " Sales/service management",
          data: [],
        },
        {
          title: "Administrative/office-work",
          data: [],
        },
        {
          title: "Tourism/Hospitality/HoReCa",
          data: [],
        },
        {
          title: "Marketing/Advertising",
          data: [],
        },
        {
          title: "Communications/Journalism/PR",
          data: [],
        },
        {
          title: " Accounting/Bookkeeping/Cash register",
          data: [],
        },
        {
          title: " Finance Management",
          data: [],
        },
        {
          title: "Banking/credit",
          data: [],
        },
        {
          title: "TV/Radio",
          data: [],
        },
        {
          title: "Education/training",
          data: [],
        },

        {
          title: " Legal",
          data: [],
        },
        {
          title: " Audit/Compliance",
          data: [],
        },
        { title: "Healthcare/Pharmaceuticalt", data: [] },
        {
          title: "Construction",
          data: [],
        },
        {
          title: "Human Resources",
          data: [],
        },
        {
          title: " Sports/Beauty",
          data: [],
        },
        {
          title: "Procurement/Logistics/Courier",
          data: [],
        },
        {
          title: "Production/Bookkeeping/Cash register",
          data: [],
        },
        { title: "Business/Management", data: [] },
        {
          title: "Art/Design/Architecture",
          data: [],
        },
        {
          title: " General/professional/Other services",
          data: [],
        },
        {
          title: "IT security/Networks",
          data: [],
        },
        {
          title: " NGO/Nonprofit",
          data: [],
        },
        {
          title: "Insurance",
          data: [],
        },
        {
          title: "Entertainment",
          data: [],
        },
        {
          title: "Data Science/Data Engineering",
          data: [],
        },
        {
          title: " Foreign language",
          data: [],
        },
        {
          title: "Hardware Design",
          data: [],
        },
        {
          title: " Data Research/Analysis",
          data: [],
        },
        {
          title: " Mechanical/Engineering",
          data: [],
        },
        {
          title: "System Admin/Engineer",
          data: [],
        },
        {
          title: " Network Administratio",
          data: [],
        },
        {
          title: "Consultancys",
          data: [],
        },
        {
          title: "State/ Public/ Civil servic",
          data: [],
        },
        {
          title: "Science",
          data: [],
        },
        {
          title: "Content writing",
          data: [],
        },
        {
          title: "Security",
          data: [],
        },
        {
          title: "DevOps/Infrastructure",
          data: [],
        },
        {
          title: "IT Support/Technician",
          data: [],
        },
      ],
    },
  ],
  companies: [],
};

const dataSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    onChangeuser(state, action) {
      state.user.userName = action.payload.userName;
    },

    onChange(state, action) {
      const name = action.payload.componentName;
      state.data[name].value = action.payload.value;
    },

    onAdd(state, action) {
      const name = action.payload.componentName;
      const data = action.payload.data;
      state.data[name] = {
        value: "",
        data: data,
      };
    },
    onClick(state, action) {
      const name = action.payload.componentName;
      state.data[name].data = state.data[name].data.map((elem) => {
        if (elem.value + "" === state.data[name].value) {
          return {
            ...elem,
            isEnhanced: !elem.isEnhanced,
          };
        }
        return { ...elem };
      });
      state.data[name].value = "";
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [deleteTodo.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [toogleStatus.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { onChange, onAdd, onClick, onChangeuser } = dataSlice.actions;

export default dataSlice.reducer;
