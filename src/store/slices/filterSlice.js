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
  specialistLevel: [
    {
      title: "Filter by specialist level",
      categories: [
        {
          title: "Student",

          config: {
            isClicked: false,
            color: "student",
          },
        },
        {
          title: "Junior",

          config: { isClicked: false, color: "junior" },
        },
        {
          title: "Mid level",

          config: { isClicked: false, color: "mid_level" },
        },
        {
          title: "Senior",

          config: { isClicked: false, color: "senior" },
        },
        {
          title: "C level",

          config: { isClicked: false, color: "c_level" },
        },
        {
          title: "Not defined",

          config: { isClicked: false, color: "not_defined" },
        },
      ],
    },

    {
      title: "Filter by job category",
      categories: [
        {
          title: "Software development",
        },
        {
          title: "Quality Assurance /Control",
        },
        {
          title: " UI/UX/Graphic Design",
        },
        {
          title: " Product/Project Management",
        },
        {
          title: "Hardware design",
        },
        {
          title: "Other IT",
        },
        {
          title: "Sales/service management",
        },
        {
          title: "Administrative/office-work",
        },
        {
          title: "Tourism/Hospitality/HoReCa",
        },
        {
          title: "Marketing/Advertising",
        },
        {
          title: "Communications/Journalism/PR",
        },
        {
          title: " Accounting/Bookkeeping/Cash register",
        },
        {
          title: " Finance Management",
        },
        {
          title: "Banking/credit",
        },
        {
          title: "TV/Radio",
        },
        {
          title: "Education/training",
        },

        {
          title: " Legal",
        },
        {
          title: " Audit/Compliance",
        },
        { title: "Healthcare/Pharmaceuticalt" },
        {
          title: "Construction",
        },
        {
          title: "Human Resources",
        },
        {
          title: "Sports/Beauty",
        },
        {
          title: "Procurement/Logistics/Courier",
        },
        {
          title: "Production/Bookkeeping/Cash register",
        },
        { title: "Business/Management" },
        {
          title: "Art/Design/Architecture",
        },
        {
          title: " General/professional/Other services",
        },
        {
          title: "IT security/Networks",
        },
        {
          title: " NGO/Nonprofit",
        },
        {
          title: "Insurance",
        },
        {
          title: "Entertainment",
        },
        {
          title: "Data Science/Data Engineering",
        },
        {
          title: " Foreign language",
        },
        {
          title: "Hardware Design",
        },
        {
          title: " Data Research/Analysis",
        },
        {
          title: " Mechanical/Engineering",
        },
        {
          title: "System Admin/Engineer",
        },
        {
          title: " Network Administratio",
        },
        {
          title: "Consultancys",
        },
        {
          title: "State/ Public/ Civil servic",
        },
        {
          title: "Science",
        },
        {
          title: "Content writing",
        },
        {
          title: "Security",
        },
        {
          title: "DevOps/Infrastructure",
        },
        {
          title: "IT Support/Technician",
        },
      ],
    },
  ],
  companies: [
    {
      title: "Filter by activity type",
      categories: [
        {
          title: "Employer",

          config: {},
        },
        {
          title: "Training provider ",

          config: {},
        },
      ],
    },
    {
      title: "Filter By Industry",
      categories: [
        {
          title: "Finance/Banking/Insurance",

          config: {},
        },
        {
          title: "Information technologies",

          config: {},
        },
        { title: "Design/Architecture/Construction", config: {} },
        { title: "Human Resources/Consulting/ Legal", config: {} },
        { title: "Import/Export/Trade", config: {} },
        { title: "Marketing/Advertising/PR", config: {} },
        { title: "Tourism/Hospitality/Entertainment", config: {} },
        { title: "Medical/Pharmaceutical", config: {} },
        { title: "Sports /Beauty", config: {} },
        { title: "Mining/Manufacturing/Production", config: {} },
        { title: "TV/Radio/Mediay", config: {} },
        { title: " Education", config: {} },
        { title: "Telecommunications", config: {} },
        { title: "Services", config: {} },
        { title: "NGO/International organization", config: {} },
        { title: "Government", config: {} },
        { title: "Agriculture/Winemaking", config: {} },
        { title: "Logistics/Courier", config: {} },
        { title: "Foundation", config: {} },
        { title: "Sport/Betting", config: {} },
        { title: "Appliance store", config: {} },
        { title: " Retail business", config: {} },
        { title: "Online Service ", config: {} },
        { title: "Municipality / State", config: {} },
        { title: "e-Commerce", config: {} },
        { title: "Investment management", config: {} },
        { title: "Aviationt", config: {} },
      ],
    },
  ],
};

const dataSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    toggleIsClickedLevel(state, action) {
      console.log(action.payload.level);
      state.specialistLevel[0].categories.map((level) => {
        if (level.title === action.payload.level) {
          level.config.isClicked = !level.config.isClicked;
        }
      });
    },

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

export const { onChange, onAdd, onClick, onChangeuser, toggleIsClickedLevel } =
  dataSlice.actions;

export default dataSlice.reducer;
