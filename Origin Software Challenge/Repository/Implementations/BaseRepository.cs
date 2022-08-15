using Microsoft.EntityFrameworkCore;
using Repository.Context;
using Repository.Interfaces;
using System.Linq.Expressions;

namespace Repository.Implementations
{
	public class BaseRepository<T> : IBaseRepository<T> where T : class
	{
		private DataContext dataContext;

		public BaseRepository(DataContext dataContext)
		{
			this.dataContext = dataContext;
		}

		public async Task CreateAsync(T entity)
		{
			await dataContext.Set<T>().AddAsync(entity);
		}

		public async Task<T> FindByConditionAsync(Expression<Func<T, bool>> expression)
		{
			var query = dataContext.Set<T>().AsQueryable();

			if (expression != null)
			{
				query = query.Where(expression);
			}

			return await query.FirstOrDefaultAsync();
		}

		public async Task SaveAsync()
		{
			await dataContext.SaveChangesAsync();
		}
	}
}
