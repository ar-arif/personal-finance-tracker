export default function db() {
  const db = [
    {
      user_name: String,
      user_pfp_link: String,
      isUserLoged: Boolean,
      salary: Number,
      expandable: Number,
      daily_limit: Number,
      total_daily_expense: Number,
      short_term_saving: Number,
      long_term_saving: Number,
      expense_list: [{ category: String, amount: Number }],
    },
  ];
}
