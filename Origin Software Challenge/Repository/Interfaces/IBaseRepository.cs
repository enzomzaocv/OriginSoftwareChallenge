using System.Linq.Expressions;

namespace Repository.Interfaces
{
	public interface IBaseRepository<T>
	{
		Task<T?> FindByConditionAsync(Expression<Func<T, bool>> expression);
		Task CreateAsync(T entity);
		Task SaveAsync();
	}
}
